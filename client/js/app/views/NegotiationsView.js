    /*jshint  esversion: 6*/

class NegotiationsView extends View {

    template(negotiationList) {
        let negotiations = negotiationList.all();
        
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th> 
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${negotiations.map(n => 
                        `
                        <tr>
                            <td>${DateConverter.toStr(n.date)}</td>
                            <td>${n.amount}</td>
                            <td>${n.value}</td>
                            <td>${n.volume}</td>
                        </tr>
                        ` 
                    ).join('')}
                </tbody>

                <tfoot>
                    <td colspan="3"></td> 
                    <td>${negotiations.reduce((total, n) => total + n.volume, 0)}</td>
                </tfoot>
            </table>
            `;
    }

}