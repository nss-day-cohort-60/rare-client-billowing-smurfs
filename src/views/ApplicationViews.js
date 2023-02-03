import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { UserList } from "../components/user/UserList"
import { UserDetails } from "../components/user/UserDetails"
import { Authorized } from "./Authorized"
import { PostList } from "../components/posts/PostList"
import { PostDetails } from "../components/posts/PostDetails"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />

			<Route path="/users">
				<Route index element={<UserList />} />
				<Route path=":userId" element={<UserDetails />} />
			</Route>

			<Route path="/posts">
				<Route index element={<PostList />} />
				<Route path=":postId" element={<PostDetails />} />
			</Route>
			

      <Route element={<Authorized token={token} />}>
        {/* Add Routes here */}
        
      </Route>
    </Routes>
  </>
}
