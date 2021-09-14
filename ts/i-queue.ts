/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 4:31 PM -- September 14, 2021.
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

/**
 * The most generic form of a queue data structure.
 * 
 * A queue is a data structure that can be thought of like the ticket line at the movie theatre. People `enqueue` at the
 * beginning of the line, waiting to reach the front. At the end of the line, people `dequeue` as they get tickets. At
 * any given time, the only person that can be `dequeue`'d is the person at the very end of the line.
 * 
 * @param {any} T The type of element being stored in this queue.
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v0.1.0
 * @since v0.1.0
 */
export interface IQueue<T> extends ICollection<T> {
	
	/**
	 * Inserts an element at the beginning of this queue.
	 * 
	 * @param {T} element The element to insert at the beginning of this queue.
	 * @returns {number} The new size of this queue.
	 */
	enqueue(element: T): number;
	
	/**
	 * Removes the element at the end of this queue if such an element exists, returning the result, or undefined if no
	 * such element is available to dequeue.
	 * 
	 * @returns {T | undefined} The element at the end of this queue if such an element exists, otherwise undefined.
	 * @see IQueue#peek
	 */
	dequeue(): T | undefined;
	
	/**
	 * Returns the element at the end of this queue if such an element exists, otherwise returning undefined.
	 * 
	 * Note: This method does not mutate the queue.
	 * 
	 * @returns {T | undefined} The element at the end of this queue if such an element exists, otherwise undefined.
	 * @see IQueue#dequeue
	 */
	peek(): T | undefined;
	
}
