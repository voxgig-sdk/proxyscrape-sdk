<?php
declare(strict_types=1);

// Proxyscrape SDK base feature

class ProxyscrapeBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ProxyscrapeContext $ctx, array $options): void {}
    public function PostConstruct(ProxyscrapeContext $ctx): void {}
    public function PostConstructEntity(ProxyscrapeContext $ctx): void {}
    public function SetData(ProxyscrapeContext $ctx): void {}
    public function GetData(ProxyscrapeContext $ctx): void {}
    public function GetMatch(ProxyscrapeContext $ctx): void {}
    public function SetMatch(ProxyscrapeContext $ctx): void {}
    public function PrePoint(ProxyscrapeContext $ctx): void {}
    public function PreSpec(ProxyscrapeContext $ctx): void {}
    public function PreRequest(ProxyscrapeContext $ctx): void {}
    public function PreResponse(ProxyscrapeContext $ctx): void {}
    public function PreResult(ProxyscrapeContext $ctx): void {}
    public function PreDone(ProxyscrapeContext $ctx): void {}
    public function PreUnexpected(ProxyscrapeContext $ctx): void {}
}
