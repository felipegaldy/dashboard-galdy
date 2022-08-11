export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {field: "user", headerName: "User", width: 230, renderCell: (params) => {
        return (
            <>
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="" />
                    {params.row.username}
                </div>
            </>
        )
    } },
    {
        field: "email", headerName: "Email", width: 230
    },
    {
        field: "age", headerName: "Age", width: 100
    },
    {
        field: "status", headerName: "Status", width: 100,
        renderCell: (params) => {
            return (
                <>
                <div className={`cellWithStatus ${params.row.status}`}>
                        {params.row.status}
                    </div>
                </>
            )
        }
    }
];


//temporary data source for datatables
export const userRows = [
    {
        id: 1,
        username: 'Snow',
        img: 'https://avatars.githubusercontent.com/u/99551212?v=4',
        status: 'ativo',
        email: 'email@email.com',
        age: 21
    },
    {
        id: 2,
        username: 'Danow',
        img: 'https://randomuser.me/api/portraits',
        status: 'ativo',
        email: 'dasemail@email.com',
        age: 15
    },
    {
        id: 3,
        username: 'C2ber',
        img: 'https://randomuser.me/api/portraits',
        status: 'ativo',
        email: 'fweemail@email.com',
        age: 5
    },
    {
        id: 4,
        username: 'Edasdasdw',
        img: 'https://randomuser.me/api/portraits',
        status: 'ativo',
        email: 'emadasdil@email.com',
        age: 548
    },
    {
        id: 59654,
        username: 'Andasdaow',
        img: 'https://randomuser.me/api/portraits',
        status: 'ativo',
        email: 'email@email.com',
        age: 48
    },
    {
        id: 165,
        username: 'Felipe',
        img: 'https://avatars.githubusercontent.com/u/99551212?v=4',
        status: 'ativo',
        email: 'felipe@email.com',
        age: 28
    },
    {
        id: 6874,
        username: 'GwSnow',
        img: 'https://randomuser.me/api/portraits',
        status: 'ativo',
        email: 'email@email.com',
        age: 37
    }
];