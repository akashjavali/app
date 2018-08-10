state = rows: ['row 1', 'row 2', 'row 3'] 

addRow = () => {
        const rows = this.state.rows;
        rows.push('new row')
        this.setState({rows: this.state.rows})
    }

    render() {  

        
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



React-table

 <ReactTable
            data={this.state.data}
            columns={[
              {
                Header: "Name",
                accessor: "tbName",
                Cell: this.renderEditable
              },
              {
                Header: "Email",
                accessor: "tbEmail",
                Cell: this.renderEditable
              },
              {
                Header: "Password",
                accessor: "tbPass",
                Cell: this.renderEditable
              }
            ]}
            className="-striped -highlight"
          />