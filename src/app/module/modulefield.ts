import { Field } from '../models';
import { Module } from './';
export class ModuleField extends Field {
    module: Module;
    required: boolean;
}