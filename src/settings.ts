
import { Injectable } from '@angular/core';
import { SettingsTabProvider } from 'terminus-settings';

import { TitleControlSettingsTabComponent } from './components/settings-tab';

@Injectable()
export class TitleControlSettingsTabProvider extends SettingsTabProvider {
	id = 'titleControl'
	title = 'Title Control'

	getComponentType(): any {
		return TitleControlSettingsTabComponent;
	}
}
