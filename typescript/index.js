// // TIPOS PRIMITIVOS: BOOLEAN, NUMBER, STRING
// let ligado: boolean = false;
// let name: string = "edson";
// let idade: number = 41;
// let altura: number = 1.9;
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
// // null
// // undefined
// let nulo: null = null;
// let indefinido: undefined = undefined;
// // tipos abrangentes: any, void
// let retorno: void = void; // só aceita valores vazio
// let retornoView: any = false // aceita qualquer tipo de valor
// // objeto - sem previsibilidade
// let pessoa: object = {
//     name: "edson",
//     cidade: "Guarulhos",
//     idade: 41,
// };
// // objeto com tipagem
// type produtoLoja = {
//     name: string;
//     preco: number;
//     unidades: number;
// }
// let meuProduto: produtoLoja = {
//     name: "tenis",
//     preco: 90,
//     unidades: 5.
// };
// // arrays
// let dados: string[] = ["victor", "menezes",];
// let dados2: Array<string> = ["victor", "menezes",];
// let infos: (string | number)[] = ["victor", 58];
// // tuplas
// let boleto: [string, number, number] = ["luz", 89, 3252];
// // arrays metodos
// dados.pop();
// // datas
// let aniversario: Date = new Date("2023-05-10 09:34");
// console.log(aniversario.toString());
// // funções
// function addnumber(x:number, y:number): number{
//     return x + y;
// }
// let soma: number = addnumber(4, 7);
// console.log(soma);
// decorators
function ExibirNome(target) {
    console.log(target);
}
var funcionario = function () {
    var _classDecorators = [ExibirNome];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var funcionario = _classThis = /** @class */ (function () {
        function funcionario_1() {
        }
        return funcionario_1;
    }());
    __setFunctionName(_classThis, "funcionario");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        funcionario = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return funcionario = _classThis;
}();
