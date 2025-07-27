let xAxisData = [
    {
        'name': 'Jan',
        'Sale': 112_000
    },{
        'name': 'Feb',
        'Sale': 99_000
    },{
        'name': 'Mar',
        'Sale': 12_000
    },{
        'name': 'Apr',
        'Sale': 99_000
    },{
        'name': 'May',
        'Sale': 54_000
    },{
        'name': 'Jun',
        'Sale': 85_000
    },{
        'name': 'Jul',
        'Sale': 34_000
    },{
        'name': 'Agu',
        'Sale': 18_000
    },{
        'name': 'Sep',
        'Sale': 0
    },{
        'name': 'Oct',
        'Sale': 73_000
    },{
        'name': 'Nov',
        'Sale': 210_000
    },{
        'name': 'Des',
        'Sale': 97_000
    },
    
]

const NewMembers = [
    {
        id: 1,
        username: 'vida',
        title: 'front Developer',
        img: './images/profile.jpg'
    },    {
        id: 2,
        username: 'fateme',
        title: 'back Developer',
        img: './images/profile.jpg'
    },
]

const transactions = [
    {
        id: 1,
        customer: 'vida',
        date: '15 Nov 2025',
        amount: 1004,
        status: 'Declined',
        profile: './images/profile.jpg',
    },{
        id: 2,
        customer: 'mobina',
        date: '24 Agust 2025',
        amount: 910,
        status: 'Pending',
        profile: './images/profile.jpg',
    },{
        id: 3,
        customer: 'narges',
        date: '20 Apr 2025',
        amount: 240,
        status: 'Approved',
        profile: './images/profile.jpg',
    },
]

const features = [
    {
        title: 'Revanue',
        amount: '$2,415',
        profit: '-11.4',
        norp: 'Down',
        p: 'Compared to last month',
        logo: 'ArrowDownwardIcon'
    },{
        title: 'Sales',
        amount: '$2,415',
        profit: '-1.4',
        norp: 'Down',
        p: 'Compared to last month',
        logo: 'ArrowDownwardIcon'

    },{
        title: 'Revanue',
        amount: '$2,415',
        profit: '+2.4',
        norp: 'Up',
        p: 'Compared to last month',
        logo: 'ArrowUpwardIcon'

    },
]

let userRows = [
    {
        id: 1,
        username: 'Kiara',
        profile: './images/profile.jpg',
        status: 'active',
        transaction: '$824',
        email: 'KiaraTnt@gmail.com',
    },{
        id: 2,
        username: 'Liana',
        profile: './images/profile.jpg',
        status: 'active',
        transaction: '$622',
        email: 'LianaTnt@gmail.com',
    },{
        id: 3,
        username: 'Tiara',
        profile: './images/profile.jpg',
        status: 'active',
        transaction: '$528',
        email: 'TiaraTnt@gmail.com',
    },{
        id: 4,
        username: 'Miana',
        profile: './images/profile.jpg',
        status: 'active',
        transaction: '$11',
        email: 'MianaTnt@gmail.com',
    },
]

let products = [
    {
        id: 1,
        title: 'Lenovo',
        Avatar: './images/profile.jpg',
        price: '$4000'
    },{
        id: 2,
        title: 'Asus',
        Avatar: './images/profile.jpg',
        price: '$3000'
    },{
        id: 3,
        title: 'Hp',
        Avatar: './images/profile.jpg',
        price: '$2000'
    },{
        id: 4,
        title: 'Acer',
        Avatar: './images/profile.jpg',
        price: '$1000'
    },
]

const pic = [
    {src: './images/profile.jpg',}
]

export {xAxisData, NewMembers, transactions, features, userRows, products, pic}
