function Display(props) {
    let display = props.value;
    if (display.length > 9) {
        display = [...display.slice(0, 7), ...".."];
    }
    return React.createElement(
        'div', {id: 'display-wrapper'},
        React.createElement('div', {id: 'display'}, display)
    );
}
  

function Pad(props) {
    return (
        React.createElement(
            'button',
            { id: props.id, onClick: () => props.onClick(props.name) },
            props.name 
        )
    );
}

function Calculator(props) {
    const [input, setInput] = React.useState('');
    const [output, setOutput] = React.useState('');
    const pads = [
        {id: 'zero', name: '0'},
        {id: 'one', name: '1'},
        {id: 'two', name: '2'},
        {id: 'three', name: '3'},
        {id: 'four', name: '4'},
        {id: 'five', name: '5'},
        {id: 'six', name: '6'},
        {id: 'seven', name: '7'},
        {id: 'eight', name: '8'},
        {id: 'nine', name: '9'},
        {id: 'add', name: '+'},
        {id: 'subtract', name: '-'},
        {id: 'multiply', name: '*'},
        {id: 'divide', name: '/'},
        {id: 'equals', name: '='},
        {id: 'decimal', name: '.'},
        {id: 'clear', name: 'AC'}
    ];
    
    const handlePadClick = (name) => {
        switch (name) {
            case '0':
                setInput(input + '0');
                break;
            case '1':
                setInput(input + '1');
                break;
            case '2':
                setInput(input + '2');
                break;
            case '3':
                setInput(input + '3');
                break;
            case '4':
                setInput(input + '4');
                break;
            case '5':
                setInput(input + '5');
                break;
            case '6':
                setInput(input + '6');
                break;
            case '7':
                setInput(input + '7');
                break;
            case '8':
                setInput(input + '8');
                break;
            case '9':
                setInput(input + '9');
                break;
            case '+':
                setInput(input + '+');
                break;
            case '-':
                setInput(input + '-');
                break;
            case '*':
                setInput(input + '*');
                break;
            case '/':
                setInput(input + '/');
                break;
            case '.':
                setInput(input + '.');
                break;
            case 'AC':
                setInput('');
                setOutput('');
                break;
            case '=':
                try {
                    setInput(String(eval(input)));
                } catch (e) {
                    setInput('Error');
                }
                break;
            default:
                console.log('Unhandled operation');
        }
    };
    


    const padElements = pads.map((pad) =>
        React.createElement(Pad, { name: pad.name, onClick: handlePadClick, id: pad.id})
    );

    return (
        React.createElement(
            'div',
            { id: 'calculator' },
            [
                React.createElement(Display, {value: input}),
                React.createElement('div', { id: 'pads' }, padElements)
            ]
        )
    );
}




ReactDOM.render(React.createElement(Calculator, null), document.getElementById('app'));