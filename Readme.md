# AwesomeMotive Code Challenge (Node, Express)
NodeJs v16.16.0<br/>
NPM v8.14.0<br/>

# Setup Guide

Step 1: Fork repo: <code>git clone https://github.com/shahzaib91/amnodeserver.git</code><br/>
Step 2: Prepare: <code>npm install</code><br/>
Step 3: Edit <code>config.js</code> located in root dir<br/>
Step 4: Import database file into Mysql<br/>
Step 5: Run server app: <code>node index.js</code>

# End-points
<table width="100%">
    <thead>
        <tr>
            <th>Method</th>
            <th>End Point</th>
            <th>Params</th>
            <th>Response (JSON)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/createBlog</td>
            <td>title*, content*</td>
            <td>{status: (true or false), message:"Human readable"}</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/updateBlog</td>
            <td>title*, content*, id*</td>
            <td>{status: (true or false), message:"Human readable"}</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/readBlog/{id}</td>
            <td>-</td>
            <td>{status:(true or false), message:"Record", record: (null or record object)}</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/readBlogs</td>
            <td>-</td>
            <td>{status:(true or false), message:"Records", records: (null or records object)}</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/deleteBlog/{id}</td>
            <td>-</td>
            <td>{status: (true or false), message:"Human readable"}</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/createComment</td>
            <td>user_name*, content*, belongs_to*</td>
            <td>{status: (true or false), message:"Human readable"}</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/readComments/{blog_id}</td>
            <td>-</td>
            <td>{status:(true or false), message:"Records", records: (null or records object)}</td>
        </tr>
    </tbody>
</table>