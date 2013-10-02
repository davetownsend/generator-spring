package <%= packageName%>.domain;

public class <%=representation%> {

    private final long id;
    private final String content;

    public <%=representation%>(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

}