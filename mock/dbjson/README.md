//获取所有用户的信息
http://localhost:3000/users

//获取id为1的用户信息
http://localhost:3000/users/1

//获取公司的所有信息
http://localhost:3000/companies

//获取单个公司的信息
http://localhost:3000/companies/1

//获取所有公司id为2的用户
http://localhost:3000/companies/2/users

//根据多个条件获取公司信息
http://localhost:3000/companies?name=amd&id=2

//获取一页中只有两条数据
http://localhost:3000/users?_page=1&_limit=2
//下一页
http://localhost:3000/users?_page=2&_limit=2
//最后一页
http://localhost:3000/users?_page=3&_limit=2

//获取公司并按照名字排序
http://localhost:3000/companies?_sort=name&order=asc

//获取年龄在30岁及以上的
http://localhost:3000/users?age_gte=30

//获取年龄在30岁及31以下的
http://localhost:3000/users?age_gte=30&age_lte=31