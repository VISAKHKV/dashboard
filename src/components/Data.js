const categories = [
	{
		id: 1,
		mainCategory: "Clothes",
		subCategories: [
			{
				id: 1,
				name: "Jeans",
				description:
					" illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse",
				units: 50,
				stock: 1000,
				expiry: "",
			},
			{
				id: 2,
				name: "Shirt",
				description:
					" illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse",
				units: 90,
				stock: 800,
				expiry: "",
			},
			{
				id: 3,
				name: "Jacket",
				description:
					" illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse",
				units: 50,
				stock: 100,
				expiry: "",
			},
		],
	},
	{
		id: 2,
		mainCategory: "food",
		subCategories: [
			{
				id: 4,
				name: "Banana",
				description:
					" illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse",
				units: 900,
				stock: 1000,
				expiry: "2020-06-12",
			},
			{
				id: 5,
				name: "Orange",
				description:
					" illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse",
				units: 710,
				stock: 800,
				expiry: "2020-04-17",
			},
			{
				id: 6,
				name: "Burger",
				description:
					" illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse",
				units: 50,
				stock: 100,
				expiry: "2020-02-10",
			},
		],
	},
	{
		id: 3,
		mainCategory: "jewelery",
		subCategories: [
			{
				id: 7,
				name: "Chain",
				description:
					" illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse",
				units: 20,
				stock: 100,
				expiry: "",
			},
			{
				id: 8,
				name: "Bangles",
				description:
					" illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse",
				units: 900,
				stock: 1000,
				expiry: "",
			},
			{
				id: 9,
				name: "Earings",
				description:
					" illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse",
				units: 800,
				stock: 900,
				expiry: "",
			},
		],
	},
];

const tasks = [
	{ id: 1, task: "Read reports" },
	{ id: 2, task: "Check email" },
	{ id: 3, task: "Schedule meetings" },
	{ id: 4, task: "daily updates" },
	{ id: 5, task: "company trip" },
];

const accounts = [
	{
		id: 1,
		accountName: "Daniel Thomas",
		email: "thomasdaneil@tmail.com",
		password: "ThomasDaniel65",
		phonenumber: 9885575557,
	},
	{
		id: 2,
		accountName: "Edwin Azaad",
		email: "azaadrockz@tmail.com",
		password: "Edwin.Azaad99",
		phonenumber: 3658479985,
	},
	{
		id: 3,
		accountName: "Kumar Upadhyay",
		email: "upadhyaykumar@tmail.com",
		password: "Upadyay@456",
		phonenumber: 3325487886,
	},
	{
		id: 4,
		accountName: "Abhul Rafeque",
		email: "abhulrafeque786@tmail.com",
		password: "password@666",
		phonenumber: 4397548312,
	},
	{
		id: 5,
		accountName: "Mahesh Reddy",
		email: "maheshsunderreddy@tmail.com",
		password: "244466666@reddy",
		phonenumber: 39475175212,
	},
	{
		id: 6,
		accountName: "Barvinder Singh",
		email: "barvinder555@tmail.com",
		password: "Barvinder@singh",
		phonenumber: 3947284682,
	},
	{
		id: 7,
		accountName: "Alex Pablo",
		email: "pabloalexmanjooran@tmail.com",
		password: "Manjooran@99",
		phonenumber: 9798546821,
	},
];

export function getData() {
	return [categories, tasks, accounts];
}
