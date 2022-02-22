import React from 'react';

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            card: '',
            subscription: ''
        }
        this.firstNameRef = React.createRef();
        this.subscription = React.createRef();
    }

    handleChange = (event) => {
        this.setState(() => ({[event.target.name]: event.target.value}), () => {
            if(this.state.card.length === 16) {
                this.subscription.current.focus();
            }
        })
    }

    componentDidMount() {
        console.log(this.firstNameRef);
        this.firstNameRef.current.focus()
    }


    // ==================================================
    // RENDER
    // ==================================================

    render() {
        const { card, subscription } = this.state;
       
        return <div>
            <input 
                type='number'
                name='card'
                placeholder='card'
                value={card}
                onChange={this.handleChange}
                ref={this.firstNameRef}
            />
            <br />
            <label>
                <input
                    type="checkbox"
                    name="subscription"
                    checked={subscription}
                    onChange={this.handleChange}
                    ref={this.subscription}
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