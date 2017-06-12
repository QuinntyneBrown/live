import { Injectable } from "@angular/core";
import { BackdropService } from "../backdrop";

@Injectable()
export class ModalService {
    constructor(private _backdropService: BackdropService) { }

}