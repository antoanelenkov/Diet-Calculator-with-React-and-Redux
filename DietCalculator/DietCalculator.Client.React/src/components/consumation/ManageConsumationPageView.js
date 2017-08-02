import React from 'react';

import * as CaloriesCountType from '../../constants/CaloriesCountType';
import InputFormGroup from '../HtmlHelpers/InputFormGroup';
import ButtonFormGroup from '../HtmlHelpers/ButtonFormGroup';
import SelectFormGroup from '../HtmlHelpers/SelectFormGroup';

export default (props) => {
    return (
        <div>
            <h3 className="centered">Add food quantity for today</h3>
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <SelectFormGroup id="foods-type-select" labelName="Food:" 
                        options={props.foods.map(food => {return { name: food.name, value:food.id}})} 
                        handleOnChange={props.handleOnFoodSelectChange}/>
                    <InputFormGroup type="number" id="quantity" value={props.consumation.quantity}
                        labelName={props.selectedType === CaloriesCountType.PER_HUNDRED_GRAMS ? "Quantity in grams" : "Items number" } 
                        handleOnChange={props.handleOnChange} />
                    <ButtonFormGroup value="Add" handleOnSubmit={props.handleOnSubmit} />
                </div>
            </div>
        </div>
    );
}