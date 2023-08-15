// src/fontawesome.js

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faUserCircle, faHome, faSearch, faHeart, faBell} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faShoppingCart, faUserCircle, faHome, faSearch, faHeart, faBell);

export { FontAwesomeIcon };

