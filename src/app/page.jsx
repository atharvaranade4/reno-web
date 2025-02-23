import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CardList from "@/components/cardList/CardList";
import Stories from "@/components/stories/Stories";

export default function Home() {
  return (
    <div>
      < Stories />
      < Featured />
      < CardList />
    </div>
  )}
