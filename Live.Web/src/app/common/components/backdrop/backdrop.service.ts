import { Injectable } from "@angular/core";

import {
    appendToBodyAsync,
    createElement,
    removeElement,
    setOpacityAsync,
    extendCssAsync
} from "../../utilities";


@Injectable()
export class BackdropService {
    
    public openAsync = () => {
        return new Promise(resolve => {
            this.initializeAsync()
                .then(this.appendBackDropToBodyAsync)
                .then(this.showAsync)
                .then(() => resolve(this.isOpen = true));
        });        
    }

    public closeAsync = () => {
        return new Promise(resolve => {
            this.hideAsync().then((results) => {
                this.dispose();
                this.isOpen = false;
                resolve();
            });
        });        
    }

    public initializeAsync = () => {
        return new Promise(resolve => {
            this.nativeElement = createElement();
            extendCssAsync({
                nativeElement: this.nativeElement,
                cssObject: {
                    "-webkit-transition": "opacity 300ms ease-in-out",
                    "-o-transition": "opacity 300ms ease-in-out",
                    "transition": "opacity 300ms ease-in-out",
                    "opacity": "0",
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "height": "100%",
                    "width": "100%",
                    "background-color": "rgba(0, 0, 0, .25)",
                    "display": "block"
                }
            }).then(() => resolve());
        });
        
    }

    public showAsync = () => setOpacityAsync({ nativeElement: this.nativeElement, opacity: "25" });

    public appendBackDropToBodyAsync = () => appendToBodyAsync({ nativeElement: this.nativeElement });

    public hideAsync = () => setOpacityAsync({ nativeElement: this.nativeElement, opacity: "0" });

    public dispose = () => {
        removeElement({ nativeElement: this.nativeElement });
        this.nativeElement = null;
    }

    public nativeElement:HTMLElement;    

    public isOpen: boolean = false;

    public isAnimating: boolean = false;
}