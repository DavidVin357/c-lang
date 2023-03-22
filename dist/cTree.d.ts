export type Literal = {
    type: 'Literal';
    value: string | number;
    raw?: string | undefined;
};
export type Identifier = {
    type: 'Identifier';
    name: string;
};
export type AssignmentOperator = '=' | '+=' | '-=' | '*=' | '/=' | '%=' | '<<=' | '>>=' | '|=' | '^=' | '&=';
export type BinaryOperator = '==' | '!=' | '<' | '<=' | '>' | '>=' | '<<' | '>>' | '+' | '-' | '*' | '/' | '%' | '|' | '||' | '^' | '&' | '&&';
export type AssignmentExpression = {
    type: 'AssignmentExpression';
    operator: AssignmentOperator;
    identifier: Identifier;
    right: Expression;
};
export type BinaryExpression = {
    type: 'BinaryExpression';
    operator: BinaryOperator;
    left: Expression;
    right: Expression;
};
export type SequenceExpression = {
    type: 'SequenceExpression';
    expressions: Array<Expression>;
};
export interface ExpressionMap {
    Literal: Literal;
    Identifier: Identifier;
    AssignmentExpression: AssignmentExpression;
    BinaryExpression: BinaryExpression;
    SequenceExpression: SequenceExpression;
}
export type Expression = ExpressionMap[keyof ExpressionMap];
export type TypeQualifier = {
    type: 'typeQualifier';
    value: string;
};
export type TypeSpecifier = {
    type: 'typeSpecifier';
    value: string;
};
export type TypeSequence = {
    type: 'TypeSequence';
    types: Array<Type>;
};
export type Type = TypeQualifier | TypeSpecifier | TypeSequence;
interface NodeMap {
    Expression: Expression;
    Identifier: Identifier;
    Literal: Literal;
}
export type Node = NodeMap[keyof NodeMap];
export {};
