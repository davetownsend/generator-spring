package <%= packageName%>.domain;

import org.springframework.hateoas.ResourceSupport;

public class <%=representation%> extends ResourceSupport {

    private final String content;

    public <%=representation%>(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }

}