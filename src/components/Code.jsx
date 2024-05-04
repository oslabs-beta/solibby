export default function Code(props) {
  return (
    <div
      class='contents [&>pre]:overflow-auto [&>pre]:rounded-md [&>pre]:py-2 [&>pre]:pl-2 [&>pre]:pr-12 [&>pre]:font-mono [&>pre]:text-sm [&>pre]:md:text-base [&>pre]:md:pr-2'
      innerHTML={props.html}
    />
  );
}
