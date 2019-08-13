/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'nb-select-fetch',
    templateUrl: './select-fetch.component.html',
    providers: [FormBuilder],
})
export class SelectFetchComponent {

    options: {id: number, text: string}[];

    form = this.fb.group({
        selectedOption : [1],
    });

    optionsSrc = [
        [
            { id: 1, text: 'Option 1' },
            { id: 2, text: 'Option 2' },
            { id: 3, text: 'Option 3' },
            { id: 4, text: 'Option 4' },
        ],
    ];

    constructor(private fb: FormBuilder) {
        from(this.optionsSrc).pipe(delay(2000)).subscribe(options => {
            this.options = options;
        })
    }
}
