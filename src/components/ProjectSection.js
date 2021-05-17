class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
        this.content = props.content;
        this.state = { setVisible: false };
      }
    render () {
        if(this.state === false){
            this.style.display = "none";
        }
    }
}
export default ProjectSection;

// Figure out how to use states instead of pure js later