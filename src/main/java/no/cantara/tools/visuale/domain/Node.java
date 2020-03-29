
package no.cantara.tools.visuale.domain;

import com.fasterxml.jackson.annotation.*;

import java.util.*;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "name",
        "ip",
        "health"
})
public class Node {

    @JsonProperty("name")
    private String name;
    @JsonProperty("ip")
    private String ip;
    @JsonProperty("health")
    private Set<Health> health = new HashSet<>();
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();


    @JsonIgnore
    public String getLookupKey() {
        String key = getName().trim() + ":" + getIp().trim();
        return key;
    }


    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    public Node withName(String name) {
        this.name = name;
        return this;
    }

    @JsonProperty("ip")
    public String getIp() {
        return ip;
    }

    @JsonProperty("ip")
    public void setIp(String ip) {
        this.ip = ip;
    }

    public Node withIp(String ip) {
        this.ip = ip;
        return this;
    }

    @JsonProperty("health")
    public Set<Health> getHealth() {
        return health;
    }

    @JsonProperty("health")
    public void setHealth(Set<Health> health) {
        this.health = health;
    }

    public void addHealth(Health healthValue) {
        if (health == null || health.size() > 5) {  // simple housecleaning
            this.health = new HashSet<>();
        }
        if (healthValue.getIp() == null || healthValue.getIp().length() < 5) {
            healthValue.setIp(getIp());
        }
        if (getName() == null || getName().length() < 2 && healthValue.getName() != null && healthValue.getName().length() > 2) {
            setName(healthValue.getName());
        }

        this.health.add(healthValue);
    }

    public Node withHealth(Health health) {
        addHealth(health);
        return this;
    }

    public Node withHealth(Set<Health> health) {
        this.health = health;
        return this;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    public Node withAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Node node = (Node) o;
        return Objects.equals(name, node.name) &&
                Objects.equals(ip, node.ip);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, ip);
    }

    @Override
    public String toString() {
        return "Node{" +
                "name='" + name + '\'' +
                ", ip='" + ip + '\'' +
                ", health=" + health +
                '}';
    }
}