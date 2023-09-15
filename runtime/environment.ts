import { RuntimeVal } from "./value";

export default class Environment {
  private parent?: Environment;
  private variables: Map<string, RuntimeVal>;

  constructor(parent?: Environment) {
    this.parent = parent;
    this.variables = new Map();
  }

  public declareVar(varname: string, value: RuntimeVal) {
    if (this.variables.has(varname)) {
      throw `Cannot declare variable ${varname}. As it already is defined.`
    }

    this.variables.set(varname, value)
    return value;
  }

  public assignVar(varname: string, value: RuntimeVal) {
    const env = this.resolve(varname);
    env.variables.set(varname, value)
    return value
  }

  public lookupVar(varname: string) {
    const env = this.resolve(varname)
    return env.variables.get(varname)
  }

  public resolve(varname: string): Environment {
    if (this.variables.has(varname)) {
      return this
    }
    if (this.parent == undefined) {
      throw `Cannot resolve '${varname}' as it does not exist.`
    }

    return this.parent.resolve(varname);
  }
}
