export const extendCssAsync = (options: { nativeElement: HTMLElement, cssObject: Object }) => {
    return new Promise((resolve, reject) => {
        Object.assign(options.nativeElement.style, options.cssObject);
        resolve();
    })    
}