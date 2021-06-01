/*
* Escopo determina a visibilidade de alguma variavel
no JS


#block statement
```js 
// vamos iniciar um bloco 

{
    // aqui dentro é um bloco e posso colocar qualquer 
    codigo
}// aqui fechamos o bloco 

```

o bloco, tambem criara um novo escopo.
Chamamos de `block-scoped`



#var 
```js
// var é global e poderá funcionar fora de um escopo
de bloco 

console.log(' > existe x depois do bloco?', x)
{
    ````var x = 0

}

console.log('>existe x depois do bloco? ' , x )
```




 */