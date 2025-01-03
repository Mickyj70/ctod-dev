// export default function Home() {

//   return (
//     <div className="">
//       <p>lol</p>
//     </div>
//   );
// }

//redirect to homepage which is new pairs
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/new-pairs");
}
