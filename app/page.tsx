import { Transition } from "./components/Transition";

export default function Home() {
  return (
    <div className="desc">
      <Transition>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
          bibendum quam. Maecenas quam dolor, lobortis ac interdum vitae, congue
          sit amet nisl. Nunc tincidunt, mi sed interdum tempor, augue tellus
          hendrerit libero, et fringilla eros ipsum eget magna. Maecenas eget
          purus et leo aliquet bibendum quis sed turpis. Duis a commodo metus.
          Nam suscipit ipsum tellus, in rhoncus sem lobortis id. Duis sit amet
          quam id felis placerat mattis quis nec felis. Curabitur cursus, metus
          ut aliquam lacinia, tellus diam porttitor mauris, ac sollicitudin
          velit quam in leo.
        </p>

        <p>
          Sed convallis nulla et nibh tempor, eget ultricies neque pharetra.
          Nulla eu sodales ligula, eget finibus nulla. Sed felis tellus, maximus
          a augue eu, fringilla lobortis lacus. Nam rutrum sollicitudin
          sagittis. Cras gravida, felis a lacinia pretium, sem tellus rutrum
          lorem, in convallis ante nulla at odio. Maecenas ac ultrices ex, sed
          ornare tortor. Aliquam nec faucibus ligula, a dapibus urna. Donec a
          lorem diam. Integer mattis tellus id lorem tempus, nec iaculis tellus
          fermentum. Curabitur non dui dignissim, rhoncus ex in, dapibus neque.
          Quisque varius pulvinar leo. Curabitur non nulla sit amet nunc
          hendrerit suscipit ut vel elit. Aliquam augue ipsum, hendrerit non
          mattis eget, pulvinar a diam. Donec dictum, nunc sit amet pulvinar
          posuere, mauris turpis hendrerit justo, ut viverra mauris orci ac
          elit.
        </p>
      </Transition>
    </div>
  );
}
