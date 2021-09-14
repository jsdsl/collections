/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 4:25 PM -- September 14, 2021.
 * Project: @jsdsl/collections
 * 
 * @jsdsl/collections - A set of interfaces, abstract classes, and types that seek to describe most basic data
 * structures.
 * Copyright (C) 2021 Trevor Sears
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { ICollection } from "./i-collection";
import { IKeyValuePair } from "./i-key-value-pair";

export interface IMap<K, V> extends ICollection<IKeyValuePair<K, V>> {
	
	put(key: K, value: V): number;
	
	has(key: K, value?: V): boolean;
	
	get(key: K): V | undefined;
	
	remove(key: K, value?: V): V | undefined;

	keys(): Set<K>;
	
	values(): V[];
	
	unzip(): [K[], V[]];
	
}
