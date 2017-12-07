module Jekyll
    class LoadJs < Liquid::Tag

        def initialize(tag_name, js, tokens)
            super
            @js = js
        end

        def render(context)
            "#{context.registers[:site].config['js_url']}/#{@js.strip!}.js"
        end
    end
end

Liquid::Template.register_tag('load_js', Jekyll::LoadJs)
