declare module "gsap-trial/SplitText" {
  import type { GSAPTimeline } from "gsap";

  export class SplitText {
    constructor(target: string | Element | Element[], vars?: Record<string, unknown>);
    revert(): void;
    chars: Element[];
    words: Element[];
    lines: Element[];
    timelines?: GSAPTimeline[];
  }
}

declare module "gsap-trial/ScrollSmoother" {
  import type { GSAPTimeline } from "gsap";

  export class ScrollSmoother {
    static create(vars?: Record<string, unknown>): ScrollSmoother;
    static get(): ScrollSmoother | null;
    static refresh(): void;
    static refreshSoft(): void;
    static kill(): void;

    scrollTop(value?: number): number;
    scrollTo(target: string | number | Element, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean;
    effects(value?: boolean): GSAPTimeline | undefined;
  }
}
