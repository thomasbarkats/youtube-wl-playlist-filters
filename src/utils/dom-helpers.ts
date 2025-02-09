// DOM helper methods for better maintainability
export function getElement(selector: string): Element | null {
  return document.querySelector(selector);
}

export function getAllElements(selector: string): NodeListOf<Element> {
  return document.querySelectorAll(selector);
}

// Wait for a DOM element to be available
export function waitForElement(selector: string): Promise<Element> {
  return new Promise(resolve => {
    if (getElement(selector)) {
      return resolve(getElement(selector) as Element);
    }

    const observer = new MutationObserver(() => {
      const element = getElement(selector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}
