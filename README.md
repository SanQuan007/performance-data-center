

## 内置功能

1. 👨‍⚕️ 菜单管理：配置系统菜单，操作权限，按钮权限标识、后端接口权限等。
2. 🧑‍⚕️ 部门管理：配置系统组织机构（公司、部门、角色）。
3. 👩‍⚕️ 角色管理：角色菜单权限分配、数据权限分配、设置角色按部门进行数据范围权限划分。
4. 🧑‍🎓 权限权限：授权角色的权限范围。
5. 👨‍🎓 用户管理：用户是系统操作者，该功能主要完成系统用户配置。
6. 🧑‍🔧 数据字典：对系统中经常使用的一些较为固定的数据进行维护。
7. 🧑‍🔧 分类字典：对系统中经常使用的一些树形数据进行维护。
8. 📁 附件管理：对平台上所有文件、图片等进行统一管理。
9. 🗓️ 操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
10. 定时任务：系统设置定时任务。

## 准备工作

```
Python >= 3.8.0 (推荐3.8+版本)
nodejs >= 16.0 (推荐最新)
Mysql >= 5.7.0 (可选，默认数据库sqlite3，推荐8.0版本)
Redis (默认需要，推荐最新版，可修改后台项目的cache配置)
```

## 前端 ♝

建议使用pnpm，项目提供了`pnpm-lock.yaml`，使用其他包管理器，容易出现版本依赖问题。

```bash
# 克隆项目
git clone https://gitee.com/fuadmin/fu-admin.git

# 进入项目目录
cd fu-admin/web

# 安装依赖
pnpm install --registry=https://registry.npm.taobao.org

# 启动服务
pnpm dev
# 浏览器访问 https://localhost:8080
# .env 文件中可配置启动端口等参数
# 构建生产环境
# pnpm build
```

## 后端 💈

```bash
# 克隆项目
git clone https://gitee.com/fuadmin/fu-admin.git
# 进入项目目录
cd fu-admin/backend
# 在 `env.py` 中配置数据库信息
# 默认是Mysql，如果使用SqlServer，请在requirements.txt中打开 
    mssql-django==1.1.2 
    pyodbc==4.0.32
# 安装依赖环境
pip3 install -r requirements.txt
# 执行迁移命令：
python3 manage.py makemigrations system
python3 manage.py migrate
# 初始化数据
python3 manage.py init
# 初始化省市县数据:
python3 manage.py init_area
# 启动项目
python3 manage.py runserver 0.0.0.0:8000
# 或使用 daphne :
daphne -b 0.0.0.0 -p 8000 fuadmin.asgi:application
```

### 访问项目

- 文档访问地址：[https://localhost:8080/api/docs](https://localhost:8080/api/docs)
- 账号：`superadmin` 密码：`123456`


