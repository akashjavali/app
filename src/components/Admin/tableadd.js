state = rows: ['row 1', 'row 2', 'row 3'] 

addRow = () => {
        const rows = this.state.rows;
        rows.push('new row')
        this.setState({rows: this.state.rows})
    }

    render() {  

        const onInputChange = this.onInputChange;
        const onBtn = this.onBtn;

        
        return (  

        
        <div>

            <table>
                    {this.state.rows.map((r) => (
                      <tr>
                          <td>{r}</td>
                      </tr>
                    ))}
                </table>
                <button id="addBtn" onClick={this.addRow}>ADD</button>

