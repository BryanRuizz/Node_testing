class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // Nodo ficticio para simplificar
    let current = dummyHead; // Nodo actual en la lista resultante
    let carry = 0; // Valor del acarreo

    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = carry; // Empezar con el acarreo
        if (l1 !== null) {
            sum += l1.val; // Agregar valor de l1
            l1 = l1.next; // Mover al siguiente nodo en l1
        }
        if (l2 !== null) {
            sum += l2.val; // Agregar valor de l2
            l2 = l2.next; // Mover al siguiente nodo en l2
        }

        // Calcular el nuevo acarreo
        carry = Math.floor(sum / 10); // Obtener la parte entera de la división
        console.log("carry",carry,sum);
        // Crear un nuevo nodo con el dígito actual
        current.next = new ListNode(sum % 10); // Obtener el dígito menos significativo
        // console.log("carry",);
        current = current.next; // Mover al siguiente nodo
    }

    return dummyHead.next; // Devolver la lista resultante
}

// Crear listas enlazadas l1 y l2
let l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // Representa 342
let l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // Representa 465

// Llamar a la función
let result = addTwoNumbers(l1, l2);

// Imprimir la lista resultante
let output = [];
while (result !== null) {
    output.push(result.val);
    result = result.next;
}
console.log(output); // Debería imprimir [7, 0, 8]
