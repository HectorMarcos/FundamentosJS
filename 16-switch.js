var signo = prompt('Cual es tu signo?');

console.log(signo);

switch (signo) {
    case 'aries':
        console.log(
            'If youre prepared and well organized, Aries, today should go smoothly and pleasantly. Feel free to indulge in fanciful daydreams and things of a whimsical nature. Youve earned the right to break from the normal routine. If youve been slacking off your tasks, however, you will now need to spend some time catching up and planning ahead.'
        );
        break;
    case 'tauro':
        console.log(
            'Dont feel badly about things you have no control over, Taurus. Tonight it would be good for you to go out and have a nice time. Put aside your responsibilities and concentrate on fun. It might be difficult to jump-start others to action, but dont let that concern you. If people dont want to budge, dont force them. They will move when theyre ready.'
        );
        break;
    case 'geminis':
    case 'géminis':
        console.log(
            'You may find it hard to sit still today, Gemini. People may pull your chain right and left in order to get a rise out of you. Whatever seems grounded and solid may end up being flimsy and detached. Beware of where you step. The ground is apt to give way with little warning. Your appetite may be ravenous, but its likely there wont be nearly enough nourishment to satisfy you.'
        );
        break;
    default:
        console.log('No encontramos su signo sodiacal');
        break;
}
