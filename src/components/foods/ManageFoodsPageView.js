import React from 'react';

import * as CaloriesCountType from '../../constants/CaloriesCountType';
import InputFormGroup from '../HtmlHelpers/InputFormGroup';
import ButtonFormGroup from '../HtmlHelpers/ButtonFormGroup';
import SelectFormGroup from '../HtmlHelpers/SelectFormGroup';

export default (props) => {
    return (
        <div>
            <h3 className="centered">Add new food</h3>
            {props.error && <div className="alert alert-danger">{props.error}</div>}
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <InputFormGroup type="text" id="name" labelName="Name" value={props.food.name} handleOnChange={props.handleOnChange} />
                    <InputFormGroup type="number" id="calories" labelName="Calories" value={props.food.calories} handleOnChange={props.handleOnChange} />
                    <InputFormGroup type="number" id="fats" labelName="Fats" value={props.food.fats} handleOnChange={props.handleOnChange} />
                    <InputFormGroup type="number" id="proteins" labelName="Proteins" value={props.food.proteins} handleOnChange={props.handleOnChange} />
                    <InputFormGroup type="number" id="carbs" labelName="Carbs" value={props.food.carbs} handleOnChange={props.handleOnChange} />
                    <SelectFormGroup 
                        id="type" 
                        labelName="Type:"
                        options={Object.values(CaloriesCountType).map(type => {return { name: type, value:type}})}
                handleOnChange={props.handleOnChange} />
                    <ButtonFormGroup value="Add" handleOnSubmit={props.handleOnSubmit} />
                </div>
            </div>
        </div>
    )
                }