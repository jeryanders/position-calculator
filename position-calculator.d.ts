// Type definitions for Position Calculator
// Project: https://github.com/tlindig/position-calculator
// Definition by: Jesse Anderson <https://github.com/jeryanders>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../jquery/jquery.d.ts"/>

interface CalculatorConfig {
    target: JQueryCoordinates;
    targetAt: string;
    item: JQuery,
    itemAt: string;
    flip: string;
}

interface ActivePosition {
    y: number;
    x: number;
}

interface Calculated {
    moveBy: ActivePosition;
}

interface Calculator {
    calculate(): Calculated;
}

interface JQueryStatic {
    PositionCalculator(options: CalculatorConfig): Calculator;
}

declare module 'position-calculator' {
    
}