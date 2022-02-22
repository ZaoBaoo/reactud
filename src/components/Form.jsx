import React from 'react';

class Form extends React.Component {
    state = {
        email: '',
        subscription: false
    }

    send = () => {
        if(!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(this.state.email)){
           alert('E-mail выбран введен не корректно!');
        } else if(this.state.subscription !== true) {
            alert('Вы не приняли условия пользовательского соглашения!')
        } else {
            alert('Вы приняты!')
        }
    }

    handler = (event) => {
        const name = event.target.name;
        if (name === 'email') {
            this.setState({email: event.target.value})
        }
        if (name === 'subscription') {
            this.setState({subscription: event.target.checked})
        }    
    }

    render() {
        const { email, subscription } = this.state;
        
        return <div>
            <input 
                type="email"
                name='email'
                placeholder='email'
                value={email}
                onChange={this.handler}
            />
            <br />
            <label>
                <input
                    type="checkbox"
                    name="subscription"
                    checked={subscription}
                    onChange={this.handler}
                />
                I agree with terms and conditions
            </label>
            <br />
            <button
                onClick={this.send}
            >
                Send
            </button>
        </div>
    }
}

export default Form;