import { Injectable } from '@angular/core';

import icons from '../interface/icons';
import {
  faChevronDown,
  faHome,
  faEnvelope,
  faFolder,
  faFolderOpen,
  faLongArrowAltRight,
  faReply,
  faForward,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { }
  icons: icons = {
    faChevronDown,
    faHome,
    faEnvelope,
    faFolder,
    faFolderOpen,
    faLongArrowAltRight,
    faReply,
    faForward,
    faTimes,
  };
}
