export const site  = {
    id:3,
    domainName:'bobbytest2',
    siteId:2,
    owner: { id: 5000, firstName: "Bobby", lastName:"Heath", userName:'bheath' },
    themeId: 6000,
    pages:[
        {
            id:1, title:"Home", slug:"", 
            layoutId: 1,
            contents:[
                { id: 200, createdOn:'', modifiedOn:'', body:'Home1 Gallery', publishedDate:'', userId:'', pageId:'', pageContentArea:'gallery' },
                { id: 200, createdOn:'', modifiedOn:'', body:'Home1 Body', publishedDate:'', userId:'', pageId:'', pageContentArea:'body' },
                { id: 200, createdOn:'', modifiedOn:'', body:'Home1 left', publishedDate:'', userId:'', pageId:'', pageContentArea:'left' }
            ],
            body:"",
            children: []
        },{
            id:2, title:"Calendar", slug:"Calendar", 
            layoutId:4,
            contents:[
                { id: 202, createdOn:'', modifiedOn:'', body:'Calendar1', publishedDate:'', userId:'', pageId:'', pageContentArea:'body'}
            ],
            body:"",
            children: [ ]
        },{
            id:3, title:"Notifications", slug:'Notifications',
            layoutId:5,
            contents:[
                { id: 203, createdOn:'', modifiedOn:'', body:'Notifications', publishedDate:'', userId:'', pageId:'', pageContentArea:'body' }
            ],
            body:"",
            children:[]
        },{
            id:4, title:"Blog", slug:'blog',
            layoutId:6,
            contents:[
                { id: 204, createdOn:'', modifiedOn:'', body:'Blog', publishedDate:'', userId:'', pageId:'', pageContentArea:'body' }
            ],
            body:"",
            children:[]
        },{
            id:5, title:"Staff", slug:'staff',
            layoutId:7,
            contents:[
                { id: 205, createdOn:'', modifiedOn:'', body:'Staff', publishedDate:'', userId:'', pageId:'', pageContentAreaId:'' }
            ],
            body:"",
            children:[
                {
                    id:6, title:"Teachers", slug:'teacher',
                    layoutId:7,
                    contents:[
                        { id: 206, createdOn:'', modifiedOn:'', body:'teachers', publishedDate:'', userId:'', pageId:'', pageContentAreaId:'' }
                    ],
                    body:"",
                    children:[]
                }
            ]
        }
    ]
};


export const areaTypes =  [
    {
        id:1,
        name:"Text" 
    },{
        id:2,
        name:"Gallery" 
    },{
        id:3,
        name:"Announcements" 
    },{
        id:4,
        name:'Calendar'
    },{
        id:5,
        name:'Notifications'
    },{
        id:6,
        name:'Module'
    }
];

export const themes = [{ 
    id:6000,
    layouts: [
        {
            id:1,
            name:'Home',
            settings:{editable:true},
            body:`<div>
                Gallery:<pom:contentArea name="gallery"></pom:contentArea>
                Body:<pom:contentArea name="body"></pom:contentArea>
            </div>
            Left:<pom:contentArea name="left"></pom:contentArea>`,
            contentAreas:[
                { name:"body", editable:true, areaTypeId:1 }
                , { name:"gallery", editable:false, areaTypeId:2 }
                , { name: 'left', editable:false, areaTypeId:1 }
            ]
        }, {
            id:2,
            name:'Gallery',
            settings:{editable:false},
            contentAreas:[]
        }, {
            id:3,
            name:'Announcements',
            settings:{editable:true},
            contentAreas:[]
        }, {
            id:4,
            name:'Assignments',
            settings:{editable:false},
            contentAreas:[]
        }, {
            id:5,
            name:'Notifications',
            settings:{editable:false},
            contentAreas:[]
        }, {
            id:6,
            name:'Blog',
            settings:{editable:false},
            contentAreas:[]
        }, {
            id:7,
            name:'Inner',
            settings:{editable:false},
            body:`<div>
                <pom:contentArea name="body"></pom:contentArea>
            </div>
            <pom:contentArea name="left"></pom:contentArea>`,
            contentAreas:[
                { name:"body", editable:true, areaTypeId:1 }
                , { name: 'left', editable:false, areaTypeId:1 }
            ]
        }
    ]
}];


export const contentArea = {
    id:1,
    name:'body',
    editable:true,
    contentType:'text'
};