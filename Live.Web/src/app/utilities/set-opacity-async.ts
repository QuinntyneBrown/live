export var setOpacityAsync = (options: { nativeElement: HTMLElement, opacity: string }) => {
    return new Promise((resolve, reject) => {
        if (options.nativeElement) {
            options.nativeElement.style.opacity = options.opacity;
            options.nativeElement.addEventListener('transitionend', removeListenerAndResolve, false);
        }
        function removeListenerAndResolve() {
            options.nativeElement.removeEventListener('transitionend', removeListenerAndResolve);
            resolve();
        }        
    });    
}   