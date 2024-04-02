{
    const travels = [
        {
            id: '00000',
            title: '2024.3.31日的一天',
            content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
            state: '1',
            open: '0',
            delete: '0',
            use_id: '00000',
            date: '20240331'
        },
        {
            id: '00001',
            title: '2024.3.31日的一天',
            content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
            state: '1',
            open: '0',
            delete: '0',
            use_id: '00001',
            date: '20240331'
        },
        {
            id: '00002',
            title: '2024.3.31日的一天',
            content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
            state: '1',
            open: '0',
            delete: '0',
            use_id: '00002',
            date: '20240331'
        },
        {
            id: '00003',
            title: '2024.3.31日的一天',
            content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
            state: '1',
            open: '0',
            delete: '0',
            use_id: '00003',
            date: '20240331'
        },
        {
            id: '00004',
            title: '2024.3.31日的一天',
            content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
            state: '1',
            open: '0',
            delete: '0',
            use_id: '00004',
            date: '20240331'
        },
        {
            id: '00005',
            title: '2024.3.31日的一天',
            content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
            state: '1',
            open: '0',
            delete: '0',
            use_id: '00005',
            date: '20240331'
        },
    ];
    
    const users = [
        {
            id: '00000',
            username: 'zjj',
            password: '123456zjj',
            profile: 'YXZ_MZS\DuckAndMountain\src\assets\profile.png'
        },
        {
            id: '00001',
            username: 'cx',
            password: '123456cx',
            profile: 'YXZ_MZS\DuckAndMountain\src\assets\profile.png'
        },
        {
            id: '00002',
            username: 'wxt',
            password: '123456wxt',
            profile: 'YXZ_MZS\DuckAndMountain\src\assets\profile.png'
        },
        {
            id: '00003',
            username: 'yhm',
            password: '123456yhm',
            profile: 'YXZ_MZS\DuckAndMountain\src\assets\profile.png'
        },
        {
            id: '00004',
            username: 'ljy',
            password: '123456ljy',
            profile: 'YXZ_MZS\DuckAndMountain\src\assets\profile.png'
        },
        {
            id: '00005',
            username: 'zqx',
            password: '123456zqx',
            profile: 'YXZ_MZS\DuckAndMountain\src\assets\profile.png'
        },
    ];

    const images = [
        {
            id: '00000',
            travel_id: '00000',
            picture: ''
        },
        {
            id: '00001',
            travel_id: '00001',
            picture: ''
        },
        {
            id: '00002',
            travel_id: '00002',
            picture: ''
        },
        {
            id: '00003',
            travel_id: '00003',
            picture: ''
        },
        {
            id: '00004',
            travel_id: '00004',
            picture: ''
        },
        {
            id: '00005',
            travel_id: '00005',
            picture: ''
        },
    ]
}

const travels = [];
for (let i = 0; i < 200; i++) {
  travels.push({
    id: `000${i}`,
    title: `2024.3.${i+1}日的一天`,
    content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
    state: '1',
    open: '0',
    delete: '0',
    use_id: '00000',
    date: `202403${i+1}`
  });
}

const users = [];
for (let i = 0; i < 200; i++) {
  users.push({
    id: `000${i}`,
    username: `user${i}`,
    password: `password${i}`,
    profile: ''
  });
}

const images = [];
for (let i = 0; i < 200; i++) {
  images.push({
    id: `000${i}`,
    travel_id: `000${i}`,
    picture: ''
  });
}