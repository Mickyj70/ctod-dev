

// export default function Home() {

//   return (
//     <div className="">
//       <p>lol</p>
//     </div>
//   );
// }
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/new-pairs");
}
