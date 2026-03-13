import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { PORTFOLIO_DATA } from './portfolio.data';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly portfolio = PORTFOLIO_DATA;
  protected readonly sections = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];
  protected currentHeaderLabel = this.portfolio.name;
  protected mobileNavOpen = false;
  private readonly isBrowser: boolean;
  private cleanupCallbacks: Array<() => void> = [];
  private activeSectionId = '';
  private lastHapticAt = 0;
  private observer?: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.bindTapHaptics();
    this.bindScrollHaptics();
  }

  ngOnDestroy(): void {
    for (const cleanup of this.cleanupCallbacks) {
      cleanup();
    }
  }

  protected isExternal(href: string): boolean {
    return href.startsWith('http');
  }

  protected isSectionActive(href: string): boolean {
    const sectionId = href.replace('#', '');
    return this.activeSectionId === sectionId;
  }

  protected getMetaIcon(type: 'location' | 'availability'): string {
    if (type === 'location') {
      return 'fa-solid fa-location-dot';
    }

    return 'fa-solid fa-bolt';
  }

  protected getLinkIcon(icon?: string): string {
    return icon ?? 'fa-regular fa-file-lines';
  }

  protected toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  protected closeMobileNav(): void {
    this.mobileNavOpen = false;
  }

  protected navigateToSection(event: Event, href: string): void {
    if (!this.isBrowser) {
      return;
    }

    event.preventDefault();

    const sectionId = href.replace('#', '');
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const wasMobileNavOpen = this.mobileNavOpen;
    this.closeMobileNav();
    this.setActiveSection(sectionId, true);

    const offset = window.innerWidth <= 720 ? 92 : 108;
    const scrollToTarget = () => {
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: 'smooth'
      });
    };

    window.setTimeout(scrollToTarget, wasMobileNavOpen ? 180 : 0);
  }

  private bindTapHaptics(): void {
    const interactiveNodes = document.querySelectorAll<HTMLAnchorElement>(
      '.nav-links a, .hero-actions a, .closing-actions a, .brand, .contact-card a'
    );

    for (const node of interactiveNodes) {
      const handler = () => this.triggerHaptic(12);
      node.addEventListener('pointerdown', handler, { passive: true });
      this.cleanupCallbacks.push(() => node.removeEventListener('pointerdown', handler));
    }
  }

  private bindScrollHaptics(): void {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
    if (!sections.length) {
      return;
    }

    const syncFromScroll = () => {
      if (window.scrollY < 32) {
        this.activeSectionId = 'about';
        this.currentHeaderLabel = this.portfolio.name;
      }
    };

    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        const bestMatch = visibleEntries[0]?.target;
        if (!(bestMatch instanceof HTMLElement)) {
          return;
        }

        this.setActiveSection(bestMatch.id);
      },
      {
        root: null,
        rootMargin: '-18% 0px -52% 0px',
        threshold: [0.2, 0.35, 0.5, 0.65]
      }
    );

    for (const section of sections) {
      this.observer.observe(section);
    }

    window.addEventListener('scroll', syncFromScroll, { passive: true });
    window.addEventListener('load', syncFromScroll, { passive: true });
    window.addEventListener('resize', this.closeMobileNavOnDesktop, { passive: true });
    syncFromScroll();

    this.cleanupCallbacks.push(() => this.observer?.disconnect());
    this.cleanupCallbacks.push(() => window.removeEventListener('scroll', syncFromScroll));
    this.cleanupCallbacks.push(() => window.removeEventListener('load', syncFromScroll));
    this.cleanupCallbacks.push(() =>
      window.removeEventListener('resize', this.closeMobileNavOnDesktop)
    );
  }

  private triggerHaptic(duration: number, cooldown = 0): void {
    const haptics = navigator.vibrate?.bind(navigator);
    if (!haptics) {
      return;
    }

    const now = Date.now();
    if (cooldown && now - this.lastHapticAt < cooldown) {
      return;
    }

    this.lastHapticAt = now;
    haptics(duration);
  }

  private getSectionLabel(sectionId: string): string {
    return this.sections.find((section) => section.href === `#${sectionId}`)?.label ?? this.portfolio.name;
  }

  private setActiveSection(sectionId: string, skipHaptic = false): void {
    if (sectionId === this.activeSectionId) {
      return;
    }

    this.activeSectionId = sectionId;
    this.currentHeaderLabel =
      sectionId === 'about' && window.scrollY < 32 ? this.portfolio.name : this.getSectionLabel(sectionId);

    if (!skipHaptic) {
      this.triggerHaptic(8, 90);
    }
  }

  private closeMobileNavOnDesktop = (): void => {
    if (window.innerWidth > 720) {
      this.mobileNavOpen = false;
    }
  };
}
