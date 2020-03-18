import React from 'react';
// Tell webpack that x uses these styles

export default { title: 'Card', };

export const Card = () =>
    <section className="card">
        <div className="cardInformation">
            <div className="balance">
                <div className="title">Float</div>
                <div className="amount">$0,000</div>
                <div className="date">Until 2020-04-13 (60 Days)</div>
            </div>

            <div className="balance">
                <div className="title">Current Balance</div>
                <div className="amount">$0,000</div>
                <div className="date">As of 2020-04-13 (60 Days)</div>
            </div>

        </div>
    </section>

export const CardSuccess = () =>
    <section className="card">
        <div className="cardInformation">
            <div className="balance">
                <div className="title success">Float</div>
                <div className="amount success">$0,000</div>
                <div className="date">Until 2020-04-13 (60 Days)</div>
            </div>

            <div className="balance">
                <div className="title">Current Balance</div>
                <div className="amount">$0,000</div>
                <div className="date">As of 2020-04-13 (60 Days)</div>
            </div>

        </div>
    </section>

export const CardError = () =>
    <section className="card">
        <div className="cardInformation">
            <div className="balance">
                <div className="title">Float</div>
                <div className="amount">$0,000</div>
                <div className="date">Until 2020-04-13 (60 Days)</div>
            </div>

            <div className="balance">
                <div className="title error">Current Balance</div>
                <div className="amount error">-$0,000</div>
                <div className="date error">As of 2020-04-13 (60 Days)</div>
            </div>

        </div>
    </section>
    ;

