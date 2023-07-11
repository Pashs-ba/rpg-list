'use client';
import {BaseCheckboxType} from "./types";

export function BaseCheckbox({
                                 required,
                                 disabled,
                                 checked,
                                 additionalClasses,
                                 onCheck
                             }: BaseCheckboxType) {
    return (
        <input required={required} type="checkbox" checked={checked} disabled={disabled} onChange={onCheck} className={`form-check-input ${additionalClasses}`}/>
    )
}