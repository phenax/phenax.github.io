
/**
 * TopBar
 *
 * My react component description
 *
 * Copyright (C) 2016 Akshay Nair
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author Akshay Nair<phenax5@gmail.com>
 *
 */

import React from 'react';


export default class TopBar extends React.Component {
	render() {
		return (
			<header class='header'>
				<div class='header__child header__logo'>
					<a href='/' data-route>A</a>
				</div>

				<div class='header__child header__menubtn'>
					<a href='#menu' class='js-open-menu fa fa-bars'></a>
				</div>
			</header>
		);
	}
}

TopBar.propTypes= {
	
};
