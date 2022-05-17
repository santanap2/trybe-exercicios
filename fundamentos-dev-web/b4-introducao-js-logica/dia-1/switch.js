let aprovacao = 'reprovado';

switch (aprovacao) {
    case "aprovada":
        console.log ('aprovado, parabens')
    break;

    case "lista":
        console.log ('lista')
    break;

    case "reprovado":
        console.log ('infelizmente nao foi dessa vez, tente novamente');
        break;
    
    default:
        console.log ('nao se aplica')
    break;
}